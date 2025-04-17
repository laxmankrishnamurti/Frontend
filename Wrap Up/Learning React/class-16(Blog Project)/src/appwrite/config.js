import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from 'appwrite'

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwritCollecionId,
                slug,                     //unique id for document
                {
                    title,
                    content,
                    featuredImage,       //The ID that we get when we upload the file
                    status,
                    userId
                }
            )
        } catch (error) {
            console.error("Application :: createPost :: ", error)
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwritCollecionId,
                slug,                //to identify the document where we want to apply the changes
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.error("Application :: updatePost :: ", error)
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwritCollecionId,
                slug
            )

            return true;
        } catch (error) {
            console.error("Application :: deletePost :: ", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwritCollecionId,
                slug                    // To identify which document is requested
            )
        } catch (error) {
            console.error("Application :: getPost :: ", error);
            return false
        }
    }

    //We have to aware about while fetching all documents because when we fetch all documents the method will return all documents which status is "Inactive". And because of this reason we need to fetch documents based on queries.

    //To fetch documents using queries we must have to assign a index value of enums.

    async getAllPost(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwritCollecionId,
                queries

                //or

                /*
                [
                Query.equal("status", "active")
                ]

                Here we can pass pageination and a limit value 
                */

            )
        } catch (error) {
            console.error("Application :: getAllPost :: ", error)
        }
    }

    //File uploading 

    async uploadFile(file) {        //We will get a file ID that acts as an image ID
        try {
            return await this.bucket.updateFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.error("Application :: uploadFile :: ", error);
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.error("Application :: deleteFile :: ", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const service = new Service()
export default service