export interface ResumeData {
  info: [
    {
      cssClass: string
      id: number
      title: string
      items: [
        {
          id: number
          title: string
          info: string
          date: string
          description: string
        }
      ]
    }
  ]
}
