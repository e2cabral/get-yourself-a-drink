import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {DrinkEntity} from "./drink.entity";
import {FavoriteEntity} from "./favorite.entity";

@Entity({ name: 'users', schema: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string

  @OneToMany(() => FavoriteEntity, (favorite) => favorite.drinks)
  drinks: Array<DrinkEntity>
}