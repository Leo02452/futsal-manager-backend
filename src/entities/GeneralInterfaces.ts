export interface Identifiable {
  id: string
}

export interface Nameable {
  name: string
}

export interface DBMetaInformation {
  createdAt: Date
  updatedAt: Date
}

export type ConnectForeignKey = {
  connect: {
    id: string
  }
};
