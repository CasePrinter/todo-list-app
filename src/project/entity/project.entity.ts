import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
// import { Project } from "../../project/entity/project.entity";
import { Todo}  from "../../todo/entity/todo.entity"
import { User } from "../../auth/entity/user.entity"


@Entity()
export class Project extends BaseEntity {
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

    // @ManyToOne(type => User, user => user.project, { eager: false })
    // user: User

    @Column({ type: 'int' })
    userId: number

    @CreateDateColumn({ type: 'timestamp' })
    deadlineDate: Date

    @Column({ nullable: false, type: 'varchar', length: 20})
    priority: string;

    @Column({ nullable: false, type: 'varchar', length: 20})
    status: string;

    // @OneToMany(type => Project, project => project.project, { eager: true })
    // project: Project[]

    @ManyToOne(type => Todo, todo => todo.project, { eager: false })
    todo: Todo
}