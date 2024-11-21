type Fields = Record<string, string>

export interface IServerResponse {
  id: number
  overviewFields: Fields
  detailedFields: Fields
}
