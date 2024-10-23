import mongoose from 'mongoose';

function validateMongoDBEnvironment() {
    const requiredEnvVars = [
        'MONGODB_USERNAME',
        'MONGODB_PASSWORD',
        'MONGODB_CLUSTER_NAME',
        'MONGODB_APP_NAME'
    ];

    const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

    if (missingVars.length > 0) {
        throw new Error(
            `Missing required environment variables: ${missingVars.join(', ')}`
        );
    }
}

export async function connectToMongoDB(dbName) {
    validateMongoDBEnvironment();
    
    const mongodbURL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER_NAME}.70f2s.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.MONGODB_APP_NAME}`;
    
    try {
        await mongoose.connect(mongodbURL, { dbName });
        console.log('Successfully connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
}

export { validateMongoDBEnvironment };