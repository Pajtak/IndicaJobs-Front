import { Tema } from "./tema"
import { Usuario } from "./usuario"

export class postagem{

  public idPost: number
  public tituloPost: string
  public textoPost: string
  public data: Date
  public palavraChavePost: string
  public usuario: Usuario
  public tema: Tema
}
