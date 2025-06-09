import prisma from "../utilities/connectpsql.js"



export const getAllblocks = async (req,res) => {
    try {
        const blocks = await prisma.blocks.findMany();

        res.status(200).json({ success:true,data: blocks});
    } catch (error) {
        console.error("Error in fetching");
        res.status(500).json({ success: false,message: "server error",error: error.message});
    }
};
export const getblock = async ( req,res) => {
    const { id } = req.params;
    
    try {
        const blocks = await prisma.blocks.findUnique({
            where: { id: parseInt(id)},
        });

        if(!blocks){
            return res.status(404).json({success: false,message:"Page not found"});
        }

        
        const recommendedProduct = await prisma.blocks.findMany({
            where:{
               
                id: { not: blocks.id}
            },
            take: 4 
        });

        if(!blocks){
            res.status(404).json({success: false,message: "Page not found"});
        }

        res.status(200).json({success:true,data: blocks,recommendedProduct});
    } catch (error) {
        console.error("Error fetching blocks:",error);
        res.status(500).json({success:false,message:"server error"});
    }
};
export const createBooking = async (req,res) => {
    try {
        const { name, mobile, address} = req.body;
        console.log(req.body);

        if(!name || !mobile || !address){
            return res.status(400).json({ error: "All fields are required"});
        }

        const newBooking = await prisma.booking.create({
            data: {
                name,
                mobile,
                address,
            },
        });

        res.status(200).json({success:true,booking: newBooking});
    } catch (error) {
        console.log("Error in Booking",error);
        res.status(500).json({error: "Internal server error"});
    }
};
export const deleteBlock = async (req,res) => {
    const {id} = req.params;

    try {
        const existingBlock = await prisma.blocks.findUnique({
            where: { id: parseInt(id)},
        });

        if(!existingBlock){
           return res.status(404).json({success: false,message: "Block Not Found"});
        }

        await prisma.blocks.delete({
            where: {id: parseInt(id)},
        });

        res.status(200).json({success: true,message: "Block deleted successfuly"});
    } catch (error) {
        console.error("error deleting block:",error);
        res.status(500).json({success: false,message:"Error in deleting blocks"});
    };  
};
export const createBlock = async (req, res) =>{
    const{name,price,image,description} = req.body

    if(!name || !price || !image || !description){
        return res.status(400).json({success: false,message: "All fields are required!"})
    }
    try {
        const newBlock = await prisma.blocks.create({
            data: {
                name,
                price: parseFloat(price),
                image,
                description,
            },
        });
        res.status(201).json({ success:true, data:newBlock});
    } catch (error) {
        console.error("Error in creating block",error);
        res.status(500).json({ success:false, message:"server error"});
    }
};
export const saveblock = async (req,res) => {
    const { id } = req.body;
    console.log("Received id in saveblock:", id); 
    try {
        const blocks = await prisma.blocks.findUnique({
            where: { id: parseInt(id)},
        });
        console.log("Fetched block:", blocks); 

        if (!blocks) {
            return res.status(404).json({ success: false, message: "Block not found" });
        }

        const savedblock = await prisma.savedblocks.create({
            data:{
                name:blocks.name,
                price:blocks.price,
                image:blocks.image,
                description:blocks.description,
            },
        });
        console.log("Saved block:", savedblock);

        res.status(201).json({ success:true,data:savedblock});

    } catch (error) {
        console.error("Error in saveBlock",error);
        res.status(500).json({ success:false,message:"Internal server error"});
    }
};
export const getSavedBlocks = async ( req,res ) => {
    try {
        const savedblocks = await prisma.savedblocks.findMany();
        res.status(200).json({ success: true,data:savedblocks}); 
    } catch (error) {
        console.error("Error in fetch saved blocks",error);
        res.status(500).json({ success: false,message: "server error"});
    }
};
// to get each block from savedblock
export const getSaveOneBlock = async (req, res) => {
    const { id } = req.params;

    try {
        const savedblocks = await prisma.savedblocks.findUnique({
            where: { id: parseInt(id)},
        });

        res.status(200).json({success: true,data: savedblocks});
    } catch (error) {
        console.error("Error in fetchingblocks",error);
        res.status(500).json({success:false,message:"internal server error"});
    }
};
export const deleteSavedBlock = async (req,res) => {
    const { id } = req.params;
    
    try {
        const existingSavedBlock = await prisma.savedblocks.findUnique({
            where: {id: parseInt(id)},
        });

        if(!existingSavedBlock){
            return res.status(404).json({success:false,message:"Block Not Found"});
        }

        await prisma.savedblocks.delete({
            where: {id: parseInt(id)},
        });

        res.status(200).json({success: true, message: "deleted successfully!"});
    } catch (error) {
        console.error("Error in deleting",error);
        res.status(500).json({success:false,message:"Internal server error"});
    };
};
export const getBookDetails = async (req,res) => {
    try {
        const booking = await prisma.booking.findMany();

        res.status(200).json({success:true,data:booking});
    } catch (error) {
        console.error("Error in fetching",error);
        res.status(500).json({success: false,message:"Internal server error"});
    };
};

export const searchBlocks = async (req, res) => {
  const { q } = req.query;

  if (!q || q.trim() === "") {
    return res.status(400).json({ success: false, message: "Search query is required" });
  }

  try {
    const blocks = await prisma.blocks.findMany({
      where: {
        OR: [
          {
            name: {
              contains: q,
              mode: "insensitive", 
            },
          },
          {
            description: {
              contains: q,
              mode: "insensitive",
            },
          },
        ],
      },
    });

    res.status(200).json({ success: true, data: blocks });
  } catch (error) {
    console.error("Error in searchBlocks:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
