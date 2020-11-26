import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { TableColumnOptions } from "typeorm/schema-builder/options/TableColumnOptions";

export class createVenuesTable1605225381976 implements MigrationInterface {

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
        name: 'owner_id',
        type: 'uuid',
        isNullable: false
      },
      {
        name: 'title',
        type: 'varchar',
        length: "255",
        isNullable: false
      },
      {
        name: 'description',
        type: 'varchar',
        length: "255",
        isNullable: false
      },
      {
        name: 'category',
        type: 'text[]',
        isNullable: false
      },
      {
        name: 'zip_code',
        type: 'varchar',
        length: '9',
        isNullable: false
      },
      {
        name: 'address',
        type: 'varchar',
        length: "255",
        isNullable: true
      },
      {
        name: 'number',
        type: 'varchar',
        length: "5",
        isNullable: true
      },
      {
        name: 'neighborhood',
        type: 'varchar',
        length: "255",
        isNullable: true
      },
      {
        name: 'city',
        type: 'varchar',
        length: "255",
        isNullable: true
      },
      {
        name: 'state',
        type: 'varchar',
        length: "255",
        isNullable: true
      },
      {
        name: 'phone',
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
      name: 'venues',
      columns: userTableColumns,
      foreignKeys: [
        {
          name: 'owner_id_fk',
          columnNames: ['owner_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'users',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }
      ]
    });

    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await queryRunner.createTable(userTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('venues');
  }

}
