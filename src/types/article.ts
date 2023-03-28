export interface Article {
  _id: string
  title: string
  createdAt: string
  updatedAt: string
  headerImage: {
    src: string
  }
  slug: string
  body: string
}
