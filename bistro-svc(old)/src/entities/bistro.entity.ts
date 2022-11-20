import { Entity, ObjectIdColumn, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm"

@Entity()
export class Bistro {
  @Column({ primary: true, generated: 'uuid' })
  id: string;

  @Column()
  name: string;

  @Column({nullable: true})
  image?: string;

  @Column({nullable: true})
  description?: string;

  @Column({nullable: true})
  ownerId?: string;
}