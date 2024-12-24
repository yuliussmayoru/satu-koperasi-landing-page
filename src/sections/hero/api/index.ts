
import axiosClient from "api/axiosClient"
import { HeroData } from "../type"

export async function fetchHero(): Promise<HeroData> {
    try {
        const response = await axiosClient.get("/api/hero")
        // console.log (`ini data hero ${JSON.stringify(response)}`)
        const heroData = response.data
        return {
            title: heroData.title,
            subtitle: heroData.subtitle
        }
    } catch (error) {
        console.log("Error fetching hero data:", error)
        return { title: "Ini default title", subtitle: "ini default subtitle"}
    }
}
