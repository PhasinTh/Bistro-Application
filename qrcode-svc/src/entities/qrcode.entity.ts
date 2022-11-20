import { Entity, Column} from "typeorm"

@Entity()
export class QRCode {
  @Column({ primary: true, generated: 'uuid' })
  id: string;

  @Column()
  bistroId: string

  @Column()
  name: string;
}