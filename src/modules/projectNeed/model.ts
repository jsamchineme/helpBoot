import { Model, DataTypes } from 'sequelize';
import sequelize from 'src/database/sequelize';
import { ProjectNeedType } from 'src/types/models';

export default class ProjectNeed extends Model {
  public id!: string;
  public projectId!: number;
  public type!: ProjectNeedType;
  public description!: string;
  public needCount!: number | null;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ProjectNeed.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  projectId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  needCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'projectNeeds',
  sequelize,
});