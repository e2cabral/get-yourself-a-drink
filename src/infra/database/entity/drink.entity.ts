import {Ingredients} from "../../../domain/models/ingredients.model";
import {Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {FavoriteEntity} from "./favorite.entity";
import {UserEntity} from "./user.entity";

@Entity({ name: 'drinks', schema: 'drinks' })
export class DrinkEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar', length: 255 })
  public name: string;

  @Column({ type: 'varchar' })
  public category: string;

  @Column({ type: 'varchar', length: 650 })
  public preparation: string;

  @Column({ type: 'varchar', length: 255 })
  public image: string;

  @Column({ type: 'json' })
  public ingredients: Array<Ingredients>;

  @OneToMany(() => FavoriteEntity, (favorite) => favorite.users)
  users: Array<UserEntity>
}