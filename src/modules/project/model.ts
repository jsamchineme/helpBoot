// import { Model, DataTypes, Op } from 'sequelize';
// import sequelize from 'src/database/sequelize';

// export default class Project extends Model {
//   public id!: string;
//   public categoryId!: number;
//   public categoryId!: string;
//   public firstname!: string | null;
//   public lastname!: string | null;
//   public email!: string;
//   public password!: string;
//   public status!: Status;
//   public shortBio!: string;
//   public locationCity!: string;
//   public locationState!: string;

//   public readonly createdAt!: Date;
//   public readonly updatedAt!: Date;

//   public static getByField: (field, value) => Project;
//   public static hasCorrectPassword: (password, Project) => boolean;
// }

// Project.init({
//   id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   firstname: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   lastname: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   shortBio: {
//     type: DataTypes.STRING,
//   },
//   locationCity: {
//     type: DataTypes.STRING,
//   },
//   locationState: {
//     type: DataTypes.STRING,
//   },
//   address: {
//     type: DataTypes.STRING,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   createdAt: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
//   updatedAt: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
// }, {
//   tableName: 'Projects',
//   sequelize,
//   hooks: {
//     beforeCreate(data) {
//       data.password = hashPassword(data.password);
//       data.status = Status.UNVERIFIED;
//     },
//   },
//   scopes: {
//     byField({ field, value }) {
//       return {
//         where: {
//           [field]: {
//             [Op.eq]: value,
//           },
//         },
//       };
//     },
//   },
// });

// Project.getByField = (field, value) => Project.scope({ method: ['byField', { field, value }] }).findOne();

// Project.hasCorrectPassword = (password, Project) => {
//   return bcrypt.compareSync(password, Project.password);
// };