import React, { useEffect, useState } from "react";
import { useUser } from '../contexts/UserContext';
import { config } from "../services/config";
import Card from "../components/subComponents/card";
import PowerBIReport from "./PowerBIReport";
import axios from 'axios';
import { MdOutlineDashboard } from "react-icons/md";


const Home = () => {
  const { user } = useUser();
  const [reports, setReports] = useState();

  const groupId = `5ff25021-e6c8-47f6-afbf-8e1eb9eec9d7`;

  const tokenaccess = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjVCM25SeHRRN2ppOGVORGMzRnkwNUtmOTdaRSIsImtpZCI6IjVCM25SeHRRN2ppOGVORGMzRnkwNUtmOTdaRSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYjMzOTdiZGQtODk5OS00NzM3LTg0ZjgtNjQzMWM3MGFjZjU2LyIsImlhdCI6MTcwNDEzMTE0NywibmJmIjoxNzA0MTMxMTQ3LCJleHAiOjE3MDQxMzUzNTksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VkFBQUFDOWdwOGxxaC9KeHBtWUpjVjkrcktvSDFRK293Z3dwUWdCc0pqdlozRUZiMVJyWmJRUW5WWkFFeEYxRU9QMkhKIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6IjE4ZmJjYTE2LTIyMjQtNDVmNi04NWIwLWY3YmYyYjM5YjNmMyIsImFwcGlkYWNyIjoiMCIsImlwYWRkciI6IjEwNS4xNTguMTY3LjYyIiwibmFtZSI6InNpbW8iLCJvaWQiOiJiM2Y4NDNkNC1iZTM2LTRkNjUtYTgyZi0yNTg5ZDA1MzFkM2YiLCJwdWlkIjoiMTAwMzIwMDMzMDg1OTZEOCIsInJoIjoiMC5BUkFBM1hzNXM1bUpOMGVFLUdReHh3clBWZ2tBQUFBQUFBQUF3QUFBQUFBQUFBQ1hBTG8uIiwic2NwIjoiQXBwLlJlYWQuQWxsIENhcGFjaXR5LlJlYWQuQWxsIENhcGFjaXR5LlJlYWRXcml0ZS5BbGwgQ29udGVudC5DcmVhdGUgRGFzaGJvYXJkLlJlYWQuQWxsIERhc2hib2FyZC5SZWFkV3JpdGUuQWxsIERhdGFmbG93LlJlYWQuQWxsIERhdGFmbG93LlJlYWRXcml0ZS5BbGwgRGF0YXNldC5SZWFkLkFsbCBEYXRhc2V0LlJlYWRXcml0ZS5BbGwgR2F0ZXdheS5SZWFkLkFsbCBHYXRld2F5LlJlYWRXcml0ZS5BbGwgSXRlbS5FeGVjdXRlLkFsbCBJdGVtLlJlYWRXcml0ZS5BbGwgSXRlbS5SZXNoYXJlLkFsbCBQaXBlbGluZS5EZXBsb3kgUGlwZWxpbmUuUmVhZC5BbGwgUGlwZWxpbmUuUmVhZFdyaXRlLkFsbCBSZXBvcnQuUmVhZC5BbGwgUmVwb3J0LlJlYWRXcml0ZS5BbGwgU3RvcmFnZUFjY291bnQuUmVhZC5BbGwgU3RvcmFnZUFjY291bnQuUmVhZFdyaXRlLkFsbCBUZW5hbnQuUmVhZC5BbGwgVGVuYW50LlJlYWRXcml0ZS5BbGwgVXNlclN0YXRlLlJlYWRXcml0ZS5BbGwgV29ya3NwYWNlLlJlYWQuQWxsIFdvcmtzcGFjZS5SZWFkV3JpdGUuQWxsIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoib1ItX0ppSHpvekVDY3lNUzg2a1Q1TW5Qd2R4MU1zSmh6RXN1bU0yaHRVbyIsInRpZCI6ImIzMzk3YmRkLTg5OTktNDczNy04NGY4LTY0MzFjNzBhY2Y1NiIsInVuaXF1ZV9uYW1lIjoic2ltb0Btam91bmV5b3Vzc2VmZ21haWwub25taWNyb3NvZnQuY29tIiwidXBuIjoic2ltb0Btam91bmV5b3Vzc2VmZ21haWwub25taWNyb3NvZnQuY29tIiwidXRpIjoiZGhQdUJBY2dLa3FfRlhhcDh2bE1BUSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.AXhK-kyg2DR3OnnejWNGRs3y5VHQCwDKomthLJH6Hv90N_YWe3NISIL3_lTYQzfNEL9bYJHP1q7_ZuRe-ZYqEZuHB9HIipjMb_kCSyP3Fe6CLW75HIz69Yca4OUaxpicreQdTqo7TwFKd5kEiKxi4PO4evZGh-Qv2zfSCX1rC2fZQb3qymAdTAYgglL9rKDbwyYqLVec6qXnw85McpOiKEkrGV56I_Mzmk1nBudeE2ejUS2wvWnFpe0fRwQLl0IpbKBGWIYovIrL5brX4SrkwEZzxXbIMeXUoQh-0rPf9n95wseEAWIMw0YKa6YQHWgIYXDggt454m77vq0a7yAsqA';

  const data = {
    "@odata.context": "http://wabi-south-africa-north-a-primary-redirect.analysis.windows.net/v1.0/myorg/groups/5ff25021-e6c8-47f6-afbf-8e1eb9eec9d7/$metadata#reports",
    "value": [
        {
            "id": "ea122c56-5c9f-4930-b3fa-73156297594a",
            "reportType": "PowerBIReport",
            "name": "US Sales Analysis",
            "webUrl": "https://app.powerbi.com/groups/5ff25021-e6c8-47f6-afbf-8e1eb9eec9d7/reports/ea122c56-5c9f-4930-b3fa-73156297594a",
            "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=ea122c56-5c9f-4930-b3fa-73156297594a&groupId=5ff25021-e6c8-47f6-afbf-8e1eb9eec9d7&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUFGUklDQS1OT1JUSC1BLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlLCJkaXNhYmxlQW5ndWxhckpTQm9vdHN0cmFwUmVwb3J0RW1iZWQiOnRydWV9fQ%3d%3d",
            "isFromPbix": true,
            "isOwnedByMe": true,
            "datasetId": "6f3dd58b-a531-4fd7-a5af-ec093bf5d337",
            "datasetWorkspaceId": "5ff25021-e6c8-47f6-afbf-8e1eb9eec9d7",
            "users": [
            ],
            "subscriptions": [
            ]
        },
        {
            "id": "f5e4ae8d-3ee5-4cfd-b60b-dd9ff62ed922",
            "reportType": "PowerBIReport",
            "name": "_RD",
            "webUrl": "https://app.powerbi.com/groups/5ff25021-e6c8-47f6-afbf-8e1eb9eec9d7/reports/f5e4ae8d-3ee5-4cfd-b60b-dd9ff62ed922",
            "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=f5e4ae8d-3ee5-4cfd-b60b-dd9ff62ed922&groupId=5ff25021-e6c8-47f6-afbf-8e1eb9eec9d7&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUFGUklDQS1OT1JUSC1BLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlLCJkaXNhYmxlQW5ndWxhckpTQm9vdHN0cmFwUmVwb3J0RW1iZWQiOnRydWV9fQ%3d%3d",
            "isFromPbix": true,
            "isOwnedByMe": true,
            "datasetId": "ddac5e11-24e8-4a72-a9f0-74d33abb6ade",
            "datasetWorkspaceId": "5ff25021-e6c8-47f6-afbf-8e1eb9eec9d7",
            "users": [
            ],
            "subscriptions": [
            ]
        }
    ]
}
  useEffect(() => {
    /* const getPowerBIReports = async () => {
      try {
        const response = await fetch(`https://api.powerbi.com/v1.0/myorg/groups/${groupId}/reports`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${tokenaccess}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setReports(data.value);
        } else {
          console.error('Error fetching Power BI reports:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching Power BI reports:', error);
      }

    };

 
    getPowerBIReports(); */


    setReports(data.value)
  }, [user]);

    return (
      <>
        <div className="flex justify-between border-b border-blue-300 mx-4 px-4">
          <div className="flex space-x-1 font-medium text-lg  ">
            <MdOutlineDashboard className="my-auto" size={20} />
            <span className="my-auto">Reports Power BI</span>
          </div>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#0078d4] text-blue-50 my-auto">2 Reports</span>
        </div>
        <div className="flex gap-4 p-4">
          {reports && reports.map((r) =>
            <Card data={r} />
          )}
        </div>
      </>
    );
}

export default Home;