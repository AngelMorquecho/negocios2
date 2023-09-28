import swal from 'sweetalert2'
const sweetAlert=()=>{ 
    swal.fire({  
        position: 'center',
        icon: 'success',
        title: 'CUENTA CREADA CORRECTAMENTE',
        showConfirmButton: false,
        timer: 2500
      })

 }
 const sweetAlertUserExist=()=>{ 
    swal.fire({  
        position: 'center',
        icon: 'error',
        title: 'USUARIO YA EXISTE',
        showConfirmButton: false,
        timer: 2500
      })

 }
 const sweetAlertPassword=()=>{ 
    swal.fire({  
        position: 'center',
        icon: 'success',
        title: 'PASSWORD ACTUALIZADO CORRECTAMENTE',
        showConfirmButton: false,
        timer: 2500
      })

 }
 const sweetAlertPasswordError=()=>{ 
    swal.fire({  
        position: 'center',
        icon: 'error',
        title: 'PORFAVOR REVISA TU EMAIL',
        showConfirmButton: false,
        timer: 2500
      })

 }
 const sweetAlertProduct=()=>{ 
    swal.fire({  
        position: 'center',
        icon: 'success',
        title: 'PRODUCTO CREADO CORRECTAMENTE',
        showConfirmButton: false,
        timer: 2500
      })

 }
 const sweetAlertProductError=()=>{ 
    swal.fire({  
        position: 'center',
        icon: 'error',
        title: 'NO SE PUDO CREAR CORRECTAMENTE EL PRODUCTO ',
        showConfirmButton: false,
        timer: 2500
      })

 }
 const sweetAlertProductUpdate=()=>{ 
    swal.fire({  
        position: 'center',
        icon: 'success',
        title: 'PRODUCT ACTUALIZADO CORRECTAMENTE',
        showConfirmButton: false,
        timer: 2500
      })

 }
 const sweetAlertProductUpdateError=()=>{ 
    swal.fire({  
        position: 'center',
        icon: 'error',
        title: 'NO SE PUDO ACTUALIZAR CORRECTAMENTE EL PRODUCTO',
        showConfirmButton: false,
        timer: 2500
      })

 }
 const sweetAlertProductOrder=()=>{ 
    swal.fire({  
        position: 'center',
        icon: 'success',
        title: 'ORDEN CREADO CORRECTAMENTE',
        showConfirmButton: false,
        timer: 2500
      })

 }
 const sweetAlertLoginC=()=>{ 
    swal.fire({  
        position: 'center',
        icon: 'warning',
        title: 'RECUERDA INICIA SESION PARA REALIZAR TU COPRA , SI NO CREA UNA NUEVA CUENTA',
        showConfirmButton: false,
        timer: 2500
      })

 }
 const sweetAlertLoginS=()=>{ 
    swal.fire({  
        position: 'center',
        icon: 'warning',
        title: 'RECUERDA INICIA SESION PARA CREAR,ELIMINAR O ACTUALIZAR TUS PRODUCTOS',
        showConfirmButton: false,
        timer: 2500
      })

 }
 const sweetAlertLoginOut=()=>{ 
    swal.fire({  
        position: 'center',
        icon: 'error',
        title: 'TU SESION EXPIRO',
        showConfirmButton: false,
        timer: 2500
      })

 }
 const sweetAlertLoginError=()=>{ 
  swal.fire({  
      position: 'center',
      icon: 'error',
      title: 'EMAIL Y/O PASSWORD SON INCORRECTOS',
      showConfirmButton: false,
      timer: 2000
    })

}
const sweetAlerData=()=>{ 
  swal.fire({  
      position: 'center',
      icon: 'error',
      title: 'EMAIL Y PASSWORD SON REQUERIDOS',
      showConfirmButton: false,
      timer: 2500
    })

}
const sweetAlerDatas=()=>{ 
  swal.fire({  
      position: 'center',
      icon: 'error',
      title: 'TODOS LOS DATOS SON REQUERIDOS',
      showConfirmButton: false,
      timer: 2500
    })

}
const sweetAlerProducts=()=>{ 
  swal.fire({  
      position: 'center',
      icon: 'success',
      title: 'PRODUCTO AGREGADO CORRECTAMENTE',
      showConfirmButton: false,
      timer: 2000
    })

}
const sweetAlerProductsDelete=()=>{ 
  swal.fire({  
      position: 'center',
      icon: 'success',
      title: 'PRODUCTO ELIMINADO CORRECTAMENTE',
      showConfirmButton: false,
      timer: 2500
    })

}
const sweetAlertSatisfaccion=()=>{ 
  swal.fire({  
      position: 'center',
      icon: 'success',
      title: '¡MUCHAS GRACIAS!',
      showConfirmButton: false,
      timer: 2500
    })

}
const sweetAlertSatisfaccionError=()=>{ 
  swal.fire({  
      position: 'center',
      icon: 'error',
      title: 'SELECCIONA UNA DE LAS SIGUINETES OPCIONES !',
      showConfirmButton: false,
      timer: 2000
    })

}
 export{
    sweetAlert,
    sweetAlertUserExist,
    sweetAlertPassword,
    sweetAlertPasswordError,
    sweetAlertProduct,
    sweetAlertProductError,
    sweetAlertProductUpdate,
    sweetAlertProductUpdateError,
    sweetAlertProductOrder,
    sweetAlertLoginC,
    sweetAlertLoginS,
    sweetAlertLoginOut,
    sweetAlertLoginError,
    sweetAlerData,
    sweetAlerDatas,
    sweetAlerProducts,
    sweetAlerProductsDelete,
    sweetAlertSatisfaccion,
    sweetAlertSatisfaccionError
 }