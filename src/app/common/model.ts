export class Cinema {
constructor(
  public id?: string,
  public title?: string,
  public year?: number,
  public runtime?: number,
  public genre?: string,
  public director?: string){
  }
}

export class CinemaKey {
  constructor(
    public id?: string,
    public title?: string
  ){}
}
