import { db } from "../utils/db";

//post result admin only
export const result = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
};

export const getResultbyId = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.result.findUnique({
      where: { id },
    });
    return res
      .status(200)
      .json({ message: "Result fetched successfully", result });
  } catch (error) {
    console.error("Result endpoint error:", error);
    return res.status(500).json({ error: "Error While Fetching Result" });
  }
};


