import type { IEmployee } from "../../types";
import FetchApi from "../index";

export class Employees extends FetchApi {
  static async getEmployees(
    offset: number,
    limit: number
  ): Promise<IEmployee[]> {
    const url =
      limit > 0 ? `employees?_limit=${limit}&_start=${offset}` : "employees";
    return await this.prototype.get.call(this, url);
  }
  static async getAllEmployeesCount(): Promise<IEmployee[]> {
    const url = "employees";
    return await this.prototype.get.call(this, url);
  }

  static async createEmployee(data: any): Promise<IEmployee> {
    const url = "employees";
    return await this.prototype.post.call(this, url, data);
  }

  static async updateEmployee(id: number | string, data: any): Promise<void> {
    const url = `employees/` + id;
    return await this.prototype.put.call(this, url, data);
  }

  static async updateEmployeeStatus(
    id: number | string,
    data: any
  ): Promise<void> {
    const url = `employees/${id}`;
    return await this.prototype.patch.call(this, url, data);
  }

  static async deleteEmployee(id: number | string): Promise<void> {
    const url = `employees/${id}`;
    return await this.prototype.delete.call(this, url);
  }

  static async getEmployeeById(id: number | string): Promise<IEmployee> {
    const url = `employees/${id}`;
    return await this.prototype.get.call(this, url);
  }
}
