const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(
  ".batteryDisChargingTime"
);

let Battery=()=>{
  if("getBattery" in navigator){
    navigator.getBattery().then((Info)=>{

      let Updat_charging_info=()=>{
        let ischarging=Info.charging ?"YES":"NO";
        batteryCharging.innerHTML=ischarging;
      }
      
      let UpdatelevelChange=()=>{
        batteryLevel.innerHTML = (Info.level * 100).toString() + "%"
      }

      let Updatechargingtime=()=>{
        // console.log(Info.batteryChargingTime);
        batteryChargingTime.innerHTML = Info.chargingTime;
      }

      let Updatebatterydischargetime=()=>{
        // console.log(Info.dischargingTime);
        batteryDisChargingTime.innerHTML = Info.dischargingTime;
      }

      Info.addEventListener("chargingchange",()=>{
        Updat_charging_info();
      })
      
      
      Info.addEventListener("levelchange",()=>{
        UpdatelevelChange();
      })
      
      Info.addEventListener("chargingtimechange", () => {
        Updatechargingtime();
      })
      
      Info.addEventListener("dischargingtimechange", () => {
            Updatebatterydischargetime(); 
      })

      let Update_all_Detail_Battery= () => {
        Updat_charging_info();
        UpdatelevelChange();
        Updatechargingtime();
        Updatebatterydischargetime();
      }

      Update_all_Detail_Battery();

      // Battery Charging Time:


      // Discharging time change:


    })
  }
}

Battery();