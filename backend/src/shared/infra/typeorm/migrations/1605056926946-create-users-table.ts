import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { TableColumnOptions } from 'typeorm/schema-builder/options/TableColumnOptions';

export class createUsersTable1605056926946 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const userTableColumns: TableColumnOptions[] = [
      {
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()',
      },
      {
        name: 'cnpj',
        type: 'varchar',
        length: "18",
        isNullable: false
      },
      {
        name: 'cpf',
        type: 'varchar',
        length: "14",
        isNullable: false
      },
      {
        name: 'name',
        type: 'varchar',
        length: "255",
        isNullable: false
      },
      {
        name: 'email',
        type: 'varchar',
        length: "255",
        isNullable: false
      },
      {
        name: 'birthday',
        type: 'date',
        isNullable: false
      },
      {
        name: 'phone',
        type: 'varchar',
        length: "14",
        isNullable: true
      },
      {
        name: 'cellphone',
        type: 'varchar',
        length: "15",
        isNullable: true
      },
      {
        name: 'created_at',
        type: 'timestamp',
        isNullable: false,
        default: 'now()'
      },
      {
        name: 'updated_at',
        type: 'timestamp',
        isNullable: false,
        default: 'now()'
      }

    ];

    const userTable: Table = new Table({
      name: 'users',
      columns: userTableColumns,
    });

    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await queryRunner.createTable(userTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
