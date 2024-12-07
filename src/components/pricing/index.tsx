"use client";

import React, { useState } from "react";
import { dummyFeatures } from "./dummy";
import PricingCard from "./priceCard";

export default function Pricing() {
  const [activePlan, setActivePlan] = useState("MONTHLY");

  // Filter data based on activePlan
  const activeFeatures = dummyFeatures.find(
    (plan) => plan.subscriptionType === activePlan
  )?.data;

  return (
    <div className="flex flex-col items-center text-center pb-12">
      <div className="flex flex-col gap-8 p-8 justify-center items-center">
        <h2 className="font-bold text-[#007654]">Pricing</h2>
        <p className="text-3xl">
          Dapatkan Pengalaman Koperasi yang Lebih Efisien dengan Paket Layanan Kami
        </p>

        <div className="flex border border-[#007654] w-52 rounded-md">
          <button
            className={`p-2 w-1/2 ${
              activePlan === "MONTHLY"
                ? "bg-[#007654] text-white"
                : "bg-white text-[#007654]"
            } rounded-l-md`}
            onClick={() => setActivePlan("MONTHLY")}
          >
            MONTHLY
          </button>
          <button
            className={`p-2 w-1/2 ${
              activePlan === "ANNUALY"
                ? "bg-[#007654] text-white"
                : "bg-white text-[#007654]"
            } rounded-r-md`}
            onClick={() => setActivePlan("ANNUALY")}
          >
            ANNUAL
          </button>
        </div>
        <div>
          <p>Save up to 15% with Annual Plan</p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div
        id="price-card"
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8"
      >
        {activeFeatures?.map((feature, index) => (
          <PricingCard
            key={index}
            title={feature.title}
            price={feature.price}
            features={feature.features}
          />
        ))}
      </div>
    </div>
  );
}
