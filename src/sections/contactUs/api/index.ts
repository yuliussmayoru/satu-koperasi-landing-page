import axiosClient from "api/axiosClient"
import { ContactData } from "../type"

export async function fetchContactData(): Promise<ContactData> {
    try {
        const response = await axiosClient.get("/api/contact")
        const data = response.data

        return {
            address: data.address || "Jl. Testing No.22",
            email: data.email || "test@example.com",
            phone: data.phone ||  "+62 852 1234 5678"
        }
    } catch (error) {
        console.error("failed to fetch contact data:", error)
        return {
            address: "Error fetching address",
            email: "Error fetching email",
            phone: "Error fetching phone"
        }
    }
}