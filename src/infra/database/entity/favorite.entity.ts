import {Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import {DrinkEntity} from "./drink.entity";
import {UserEntity} from "./user.entity";

@Entity({ name: 'favorites', schema: 'favorites' })
export class FavoriteEntity {
  @PrimaryColumn({ name: 'user_id' })
  userId: number

  @PrimaryColumn({ name: 'drink_id' })
  drinkId: number

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  users: Array<UserEntity>

  @ManyToOne(() => DrinkEntity)
  @JoinColumn({ name: 'drink_id' })
  drinks: Array<DrinkEntity>
}