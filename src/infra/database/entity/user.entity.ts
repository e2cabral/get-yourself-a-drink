import {Ingredients} from "../../../domain/models/ingredients.model";
import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {DrinkEntity} from "./drink.entity";

@Entity({ name: 'users', schema: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string

  @ManyToMany(() => DrinkEntity)
  @JoinTable()
  drinks: Array<DrinkEntity>
}