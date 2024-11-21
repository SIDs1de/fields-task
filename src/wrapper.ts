import { IServerResponse } from './types'

const serverData: IServerResponse[] = Object.values(
  {
    data: {
      '1': {
        id: 1,
        overviewFields: {
          field1: 'field_overview_1_1',
          field2: 'field_overview_1_2',
          field3: 'field_overview_1_3',
          field4: 'field_overview_1_4',
          field5: 'field_overview_1_5',
          field6: 'field_overview_1_6',
        },
        detailedFields: {
          field1: 'field_detailed_1_1',
          field2: 'field_detailed_1_2',
          field3: 'field_detailed_1_3',
          field4: 'field_detailed_1_4',
          field5: 'field_detailed_1_5',
          field6: 'field_detailed_1_6',
        },
      },
      '2': {
        id: 2,
        overviewFields: {
          field1: 'field_overview_2_1',
          field2: 'field_overview_2_2',
          field3: 'field_overview_2_3',
          field4: 'field_overview_2_4',
          field5: 'field_overview_2_5',
          field6: 'field_overview_2_6',
        },
        detailedFields: {
          field1: 'field_detailed_2_1',
          field2: 'field_detailed_2_2',
          field3: 'field_detailed_2_3',
          field4: 'field_detailed_2_4',
          field5: 'field_detailed_2_5',
          field6: 'field_detailed_2_6',
        },
      },
      '3': {
        id: 3,
        overviewFields: {
          field1: 'field_overview_3_1',
          field2: 'field_overview_3_2',
          field3: 'field_overview_3_3',
          field4: 'field_overview_3_4',
          field5: 'field_overview_3_5',
          field6: 'field_overview_3_6',
        },
        detailedFields: {
          field1: 'field_detailed_3_1',
          field2: 'field_detailed_3_2',
          field3: 'field_detailed_3_3',
          field4: 'field_detailed_3_4',
          field5: 'field_detailed_3_5',
          field6: 'field_detailed_3_6',
        },
      },
      '4': {
        id: 4,
        overviewFields: {
          field1: 'field_overview_4_1',
          field2: 'field_overview_4_2',
          field3: 'field_overview_4_3',
          field4: 'field_overview_4_4',
          field5: 'field_overview_4_5',
          field6: 'field_overview_4_6',
        },
        detailedFields: {
          field1: 'field_detailed_4_1',
          field2: 'field_detailed_4_2',
          field3: 'field_detailed_4_3',
          field4: 'field_detailed_4_4',
          field5: 'field_detailed_4_5',
          field6: 'field_detailed_4_6',
        },
      },
      '5': {
        id: 5,
        overviewFields: {
          field1: 'field_overview_5_1',

          field2: 'field_overview_5_2',
          field3: 'field_overview_5_3',
          field4: 'field_overview_5_4',
          field5: 'field_overview_5_5',
          field6: 'field_overview_5_6',
        },
        detailedFields: {
          field1: 'field_detailed_5_1',
          field2: 'field_detailed_5_2',
          field3: 'field_detailed_5_3',
          field4: 'field_detailed_5_4',
          field5: 'field_detailed_5_5',
          field6: 'field_detailed_5_6',
        },
      },
    },
  }.data
)

export const serverRequest = async (id: number) => {
  return await serverData.find(item => item.id === id)
}
