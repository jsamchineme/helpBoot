import {
  Model,
  DataTypes,
  Association,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyHasAssociationMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
} from 'sequelize';
import sequelize from 'src/database/sequelize';
import ProjectNeed from 'src/modules/projectNeed/model';

export default class Project extends Model {
  public id!: string;
  public categoryId!: number;
  public title!: string;
  public shortDescription!: string;
  public fullDescription!: string;
  public banner!: string | null;
  public visible!: number;
  public location!: string;
  public startDate!: string;
  public endDate!: string;

  public getProjectNeeds!: HasManyGetAssociationsMixin<ProjectNeed>;
  public addProject!: HasManyAddAssociationMixin<ProjectNeed, number>;

  public hasProject!: HasManyHasAssociationMixin<ProjectNeed, number>;
  public countProjects!: HasManyCountAssociationsMixin;
  public createProject!: HasManyCreateAssociationMixin<ProjectNeed>;

  // You can also pre-declare possible inclusions, these will only be populated if you
  // actively include a relation.
  public readonly projectNeeds?: ProjectNeed[]; // Note this is optional since it's only populated when explicitly requested in code

  public static associations: {
    projectNeeds: Association<Project, ProjectNeed>;
  };

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Project.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  categoryId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shortDescription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fullDescription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  banner: {
    type: DataTypes.STRING,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  visible: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.STRING,
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
  tableName: 'projects',
  sequelize,
});

// Here we associate which actually populates out pre-declared `association` static and other methods.
Project.hasMany(ProjectNeed, {
  sourceKey: 'id',
  foreignKey: 'projectId',
  as: 'projectNeeds'
});