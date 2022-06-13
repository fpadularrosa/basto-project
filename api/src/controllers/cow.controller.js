const { Cow } = require('../models/Cow.schema')

module.exports = { 
    cows: async (req, res) =>{
        try {
            const { pasture } = req.query
            const allCows = await Cow.find({});

            if(pasture && allCows.length){
                const cow = allCows.filter(cow => cow.pasture.toLowerCase() === pasture.toLowerCase());
                if(cow) return res.json({success: true, response: cow});
                return res.status(404).json({success: false, error: 'The pasture does not exist'});
            }
            if(!allCows) throw new Error('Cows not finded');
            res.send(200).json({success: true, response: allCows});
        } catch (error) {            
            res.status(404).json({success: false, error: error.message});
        }
    },
    deleteCows: async (req, res)=> {
        try {
            const { id } = req.params
            if(!id) throw new Error('id not finded');

            const cowEliminated = await Cow.findByIdAndRemove(id);
            if(!cowEliminated) throw new Error('Cow not finded')
            res.json({success: true, response: 'Cow deleted successfully'});
        } catch (error) {
            res.status(404).json({success: false, error: error.message});
        }
    },
    updateCows: async (req, res) => {
        try {
            const { _id } = req.params
            const {id, ...cow} = req.body

            const cowUpdated = await Cow.findByIdAndUpdate(_id, cow)
            if(!cowUpdated) throw new Error('Cow not finded');
            res.json({success: true, response: cowUpdated});
        } catch (error) {
            res.status(404).json({success: false, error: error.message});
        }
    },
    postCow: async (req, res) => {
        try {
            const cow = req.body;

            const newCow = await Cow.create({
                ...cow
            });
    
            if(!newCow) throw new Error('Cow not created');
            res.json({success: true, response: 'Cow created successfully'});
        } catch (error) {
            res.status(404).json({success: false, error: error.message});
        }
    }
}