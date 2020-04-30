export interface IEvent {
  id: number
  name: string
  date: Date
  time: string
  price: number
  imageUrl: string
  location?: {
    address: string
    city: string
    coutry: string
  }
  onlineUrl: string,
  sessions: ISession[]
}
