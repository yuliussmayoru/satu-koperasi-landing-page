
import axiosClient from "api/axiosClient";
import { FeaturesData } from "../type";

export async function fetchFeatures(): Promise<FeaturesData> {
    try {
        const response = await axiosClient.get("/api/features-managements");
        const FeaturesData = response.data?.[0];
        return {
            featuresTitle: FeaturesData.featuresTitle,
            featuresSubtitle: FeaturesData.featuresSubtitle,
            featuresDescHead: FeaturesData.featuresDescHead,
            featuresDescContent: FeaturesData.featuresDescContent,
            featuresRegistrationStepSection: FeaturesData.featuresRegistrationStepSection,
        };
    } catch (error) {
        console.log("Error fetching Features Data:", error);
        return {
            featuresTitle: "Error fetching Features Data",
            featuresSubtitle: "Error fetching Features Subtitle",
            featuresDescHead: "Error fetching features description head",
            featuresDescContent: "Error fetching features description content",
            featuresRegistrationStepSection: [
                { title: "ini step satu", description: "ini keterangan step satu" },
            ],
        };
    }
}