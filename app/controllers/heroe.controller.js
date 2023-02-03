const { default: mongoose } = require('mongoose');
const heroe = require('../models/heroe');
var Heroe = require('../models/heroe');
const { param } = require('../routes/heroe.routes');

function saveHeroe(req, res) {
    var heroe = new Heroe();

    var params = req.body;

    if (params.nombre) {
        heroe.nombre = params.nombre;
        heroe.bio = params.bio;
        heroe.img = params.img;
        heroe.aparicion = params.aparicion;
        heroe.casa = params.casa;

        heroe.save((err, heroeStored) => {
            if (err) {
                res.status(200).send({
                    mensaje: 'error del servidor'
                })
            } else {
                if (heroeStored) {
                    res.status(200).send({
                        heroe: heroeStored,
                        mensaje: 'heroe registrado'
                    });
                } else {
                    res.status(200).send({
                        mensaje: 'no se puede guardar al heroe'
                    })
                }
            }
        })
    } else {
        res.status(200).send({
            mensaje: 'nombre de heroe obligatorio'
        })
    }
}

function pruebas(req, res) {
    res.status(200).send({
        mensaje: 'ruta de prueba de mi Api'
    });
}

const actualizarHeroe = (req, res) => {
    var params = req.body;
    const id = req.body.id;

    if (params.nombre) {
        respu = heroe.updateOne(
            {
                _id: mongoose.Types.ObjectId(id)
            },
            {
                nombre: params.nombre,
                bio: params.bio,
                img: params.img,
                aparicion: params.aparicion,
                casa: params.casa
            }, (err, resul) => {
                if (err) {
                    res.status(200).send({
                        mensaje: 'error del servidor'
                    })
                } else {
                    res.status(200).send({
                        res: resul,
                        mensaje: 'heroe registrado'
                    });
                }
            });

        //console.log(respu);
    } else {
        res.status(200).send({
            mensaje: 'nombre de heroe obligatorio'
        })
    }

};


const eliminarHeroe = (req, res) => {
    const id = req.body.id;
    console.log(id);
    const resu = heroe.deleteOne(
        {
            _id: mongoose.Types.ObjectId(id)
        }, (err) => {
            if (!err) res.status(200).send({
                mensaje: "Exito"
            })
        }
    )
    console.log("res ");
};

const findHeroe = (req, res) => {
    const params = req.body;
    console.log(param);
    const resu = heroe.findOne({ nombre: params.nombre }, function (err, docs) {
        if (err) {
            console.log(err)
        }
        else {
            res.status(200).send({
                mensaje: docs
            })
        }
    });
};





module.exports = {
    pruebas,
    saveHeroe,
    actualizarHeroe,
    eliminarHeroe,
    findHeroe
};