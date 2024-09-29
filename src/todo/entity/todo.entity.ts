import { User } from "../../auth/entity/user.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Project } from "../../project/entity/project.entity";
import { List } from "../../list/entity/list.entity";


@Entity()
export class Todo extends BaseEntity {
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

    @ManyToOne(type => User, user => user.todo, { eager: false })
    user: User

    @Column({ type: 'int' })
    userId: number

    @CreateDateColumn({ type: 'timestamp' })
    deadlineDate: Date

    @Column({ nullable: false, type: 'varchar', length: 20 })
    priority: string;

    @Column({ nullable: false, type: 'varchar', length: 20})
    status: string;

    @OneToMany(type => Project, project => project.todo, { eager: true })
    project: Project[]

    @OneToMany(type => List, list => list.todo, { eager: true })
    list: List[]
    
}