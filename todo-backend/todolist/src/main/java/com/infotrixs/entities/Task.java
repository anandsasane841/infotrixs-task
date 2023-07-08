package com.infotrixs.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TaskManager")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int task_id;
    private String task_title;
    private String task_desc;
    private String due_date;
    private String priority;
    private String status;
    private String creation_date;

    public Task() {
    }

    public Task(int task_id, String task_title, String task_desc, String due_date, String priority, String status,
            String creation_date) {
        this.task_id = task_id;
        this.task_title = task_title;
        this.task_desc = task_desc;
        this.due_date = due_date;
        this.priority = priority;
        this.status = status;
        this.creation_date = creation_date;
    }

    public int getTask_id() {
        return task_id;
    }

    public void setTask_id(int task_id) {
        this.task_id = task_id;
    }

    public String getTask_title() {
        return task_title;
    }

    public void setTask_title(String task_title) {
        this.task_title = task_title;
    }

    public String getTask_desc() {
        return task_desc;
    }

    public void setTask_desc(String task_desc) {
        this.task_desc = task_desc;
    }

    public String getDue_date() {
        return due_date;
    }

    public void setDue_date(String due_date) {
        this.due_date = due_date;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCreation_date() {
        return creation_date;
    }

    public void setCreation_date(String creation_date) {
        this.creation_date = creation_date;
    }

    @Override
    public String toString() {
        return "Task{" +
                "task_id=" + task_id +
                ", task_title='" + task_title + '\'' +
                ", task_desc='" + task_desc + '\'' +
                ", due_date='" + due_date + '\'' +
                ", priority='" + priority + '\'' +
                ", status='" + status + '\'' +
                ", creation_date='" + creation_date + '\'' +
                '}';
    }
}
