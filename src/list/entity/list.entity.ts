import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
// import { Project } from "../../project/entity/project.entity";
import { Todo}  from "../../todo/entity/todo.entity"


@Entity()
export class List extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar"})
    title: string

    @Column()
    description: string

    @CreateDateColumn({ type: 'timestamp' })
    createdDate: Date

    @CreateDateColumn({ type: 'timestamp' })
    updatedDate: Date

    @Column({ type: 'int' })
    userId: number

    @Column({ nullable: false, type: 'varchar', length: 20 })
    status: string;

    @ManyToOne(type => Todo, todo => todo.project, { eager: false })
    todo: Todo
}