import { Request, Response } from "express";
import { executeQuery } from "../config/database";

export class BaseController {
  protected tableName: string;
  protected idColumn: string;

  constructor(tableName: string, idColumn: string) {
    this.tableName = tableName;
    this.idColumn = idColumn;
  }

  // Get all records
  getAll = async (req: Request, res: Response) => {
    try {
      const result = await executeQuery(`SELECT * FROM ${this.tableName}`);
      res.json(result.rows);
    } catch (error) {
      console.error(`Error fetching ${this.tableName}:`, error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  // Get single record by ID
  getById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const result = await executeQuery(
        `SELECT * FROM ${this.tableName} WHERE ${this.idColumn} = :id`,
        { id }
      );

      if (!result.rows || result.rows.length === 0) {
        return res.status(404).json({ message: "Record not found" });
      }

      res.json(result.rows[0]);
    } catch (error) {
      console.error(`Error fetching ${this.tableName} by ID:`, error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  // Create new record
  create = async (req: Request, res: Response) => {
    try {
      const columns = Object.keys(req.body).join(", ");
      const values = Object.keys(req.body)
        .map((key) => `:${key}`)
        .join(", ");
      const params = req.body;

      const result = await executeQuery(
        `INSERT INTO ${this.tableName} (${columns}) VALUES (${values}) RETURNING ${this.idColumn} INTO :id`,
        { ...params, id: { dir: 3000, type: 2002 } }
      );

      res.status(201).json({
        id: result.outBinds.id[0],
        ...req.body,
      });
    } catch (error) {
      console.error(`Error creating ${this.tableName}:`, error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  // Update record
  update = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const updates = Object.entries(req.body)
        .map(([key]) => `${key} = :${key}`)
        .join(", ");
      const params = { ...req.body, id };

      const result = await executeQuery(
        `UPDATE ${this.tableName} SET ${updates} WHERE ${this.idColumn} = :id`,
        params
      );

      if (result.rowsAffected === 0) {
        return res.status(404).json({ message: "Record not found" });
      }

      res.json({ id, ...req.body });
    } catch (error) {
      console.error(`Error updating ${this.tableName}:`, error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  // Delete record
  delete = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const result = await executeQuery(
        `DELETE FROM ${this.tableName} WHERE ${this.idColumn} = :id`,
        { id }
      );

      if (result.rowsAffected === 0) {
        return res.status(404).json({ message: "Record not found" });
      }

      res.json({ message: "Record deleted successfully" });
    } catch (error) {
      console.error(`Error deleting ${this.tableName}:`, error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}
