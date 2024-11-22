import { useEffect, useState } from 'react'
import './style.css'
import { serverRequest } from './wrapper'
import { useAppDispatch, useAppSelector, useDebounce } from './hooks'
import { setServerData } from './serverResponseReducer'
import { IServerResponse } from './types'
import { Dispatch, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'

interface IMyInputProps {
  val: string
  stateSetter: React.Dispatch<React.SetStateAction<string>>
  serverResponse: IServerResponse[]
  dispatch: ThunkDispatch<
    {
      serverResponse: {
        value: IServerResponse[]
      }
    },
    undefined,
    UnknownAction
  > &
    Dispatch<UnknownAction>
  setSelectedItem: React.Dispatch<React.SetStateAction<IServerResponse>>
}

function MyInput({ val, stateSetter, serverResponse, dispatch, setSelectedItem }: IMyInputProps) {
  const debouncedValue = useDebounce(val)

  useEffect(() => {
    if (debouncedValue) {
      const myFunction = async () => {
        let currentItem = serverResponse.find(item => item.id == Number(debouncedValue))
        if (!currentItem) {
          currentItem = await serverRequest(Number(debouncedValue))
          console.log('Запрос', debouncedValue)
          if (currentItem) dispatch(setServerData(currentItem))
        }
        setSelectedItem(currentItem || ({} as IServerResponse))
      }

      myFunction()
    }
  }, [debouncedValue, dispatch, val, serverResponse, setSelectedItem])

  return <input className='myInput' type='text' value={val} onChange={e => stateSetter(e.target.value)} />
}

function OverviewList({ overviewFields: fields }: { overviewFields: IServerResponse['overviewFields'] }) {
  return (
    <ul>
      {Object.entries(fields)?.map(field => (
        <li key={field[0]}>
          {field[0]}: {field[1]}
        </li>
      ))}
    </ul>
  )
}
function App() {
  const [leftInputText, setLeftInputText] = useState('')
  const [rightInputText, setRightInputText] = useState('')
  const [leftSelectedItem, setLeftSelectedItem] = useState({} as IServerResponse)
  const [rightSelectedItem, setRightSelectedItem] = useState({} as IServerResponse)
  const serverResponse = useAppSelector(state => state.serverResponse.value)
  const dispatch = useAppDispatch()

  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='left'>
          <MyInput
            serverResponse={serverResponse}
            dispatch={dispatch}
            val={leftInputText}
            stateSetter={setLeftInputText}
            setSelectedItem={setLeftSelectedItem}
          />
          {leftSelectedItem.overviewFields && <OverviewList overviewFields={leftSelectedItem.overviewFields} />}
        </div>
        <div className='center'>
          <div className='col-1'>
            <ul>
              {leftSelectedItem.detailedFields &&
                Object.entries(leftSelectedItem.detailedFields)?.map(item => (
                  <li key={item[0]}>
                    {item[0]}:<br /> {item[1]}
                  </li>
                ))}
            </ul>
          </div>
          <div className='col-2'>
            <ul>
              {rightSelectedItem.detailedFields &&
                Object.entries(rightSelectedItem.detailedFields)?.map(item => (
                  <li key={item[0]}>
                    {item[0]}: <br /> {item[1]}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className='right'>
          <MyInput
            serverResponse={serverResponse}
            dispatch={dispatch}
            val={rightInputText}
            stateSetter={setRightInputText}
            setSelectedItem={setRightSelectedItem}
          />
          {rightSelectedItem.overviewFields && <OverviewList overviewFields={rightSelectedItem.overviewFields} />}
        </div>
      </div>
    </div>
  )
}

export default App
