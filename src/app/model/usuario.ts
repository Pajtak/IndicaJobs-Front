import { postagem } from "./postagem"

export class Usuario{

  public idUsuario: number
  public nome: string
  public email: string
  public senha: string
  public foto: string
  public tipo: string
  public postagem: postagem[]

}
