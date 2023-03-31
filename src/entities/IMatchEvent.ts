import { ConnectForeignKey, Identifiable } from './GeneralInterfaces';

export interface ICreatedMatchEvent extends
  Identifiable {
  eventId: string
  eventPlayerId: string
  matchId: string
  hasAssist: boolean
  assistPlayerId: string | null,
  game: string
  updatedAt: Date
}

export interface IMatchEventToSave {
  id: string
  hasAssist: boolean
  game: string
  event: ConnectForeignKey
  eventPlayer: ConnectForeignKey
  match: ConnectForeignKey
  assistPlayer?: ConnectForeignKey | {
    connect: {
      id: string | undefined
    }
  }
}
