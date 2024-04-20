

// //fish
// const fish_grey = document.getElementById("f_grey").value
// const fish_pearl = document.getElementById("f_green").value
// const fish_green = document.getElementById("f_green_2").value
// const fish_blue = document.getElementById("f_blue").value

// //logging
// const log_grey = document.getElementById("l_grey").value
// const log_green = document.getElementById("l_green").value
// const log_blue = document.getElementById("l_blue").value

// //hunt
// const hunt_grey = document.getElementById("h_grey").value
// const hunt_leather = document.getElementById("h_green").value
// const hunt_green = document.getElementById("h_green_2").value
// const hunt_blue = document.getElementById("h_blue").value

// //mushrooms
// const mush_grey = document.getElementById("for_grey").value
// const mush_green = document.getElementById("for_green").value
// const mush_blue = document.getElementById("for_blue").value

// //flowers
// const for_grey = document.getElementById("for_grey_herb").value
// const for_green = document.getElementById("for_green_herb").value
// const for_blue = document.getElementById("for_blue_herb").value

//mining
// const mine_grey = document.getElementById("m_grey").value
// const mine_green = document.getElementById("m_green").value
// const mine_blue = document.getElementById("m_blue").value



//misc
const oreha_raw_gold = 288 //per one craft
const stim_raw_gold = 28
const atro_raw_gold = 28
const steak_raw_gold = 48

function orehaCalc() {
    //mats
    const excav_grey = document.getElementById("e_grey").value
    const excav_green = document.getElementById("e_green").value
    const excav_blue = document.getElementById("e_blue").value
    const red_oreha_price = document.getElementById("red_oreha").value

    //price per 1 material
    const e_grey_1=excav_grey / 100;
    const e_green_1=excav_green / 10;
    const e_blue_1=excav_blue / 10;

    //price of one craft
    const oreha_one = (e_blue_1*52)+(e_green_1*51)+(e_grey_1*107)+oreha_raw_gold
    const oreha_10 = oreha_one*10
    const oreha_20 = oreha_one*20
    const oreha_30 = oreha_one*30

    //make 30/ 10craft
    const oreha_10_profit = ((red_oreha_price*30)*0.95-oreha_10)
    const oreha_20_profit = ((red_oreha_price*60)*0.95-oreha_20)
    const oreha_30_profit = ((red_oreha_price*90)*0.95-oreha_30)
    //console.log(red_oreha_price*30, red_oreha_price*60, red_oreha_price*90)

    //cost
    document.getElementById("oreha_10_cost").innerHTML=Math.round(oreha_10,0)
    document.getElementById("oreha_20_cost").innerHTML=Math.round(oreha_20,0)
    document.getElementById("oreha_30_cost").innerHTML=Math.round(oreha_30,0)

    //profit
    document.getElementById("oreha_10_profit").innerHTML=Math.round(oreha_10_profit,0)
    document.getElementById("oreha_20_profit").innerHTML=Math.round(oreha_20_profit,0)
    document.getElementById("oreha_30_profit").innerHTML=Math.round(oreha_30_profit,0)
}

function orehaCalc_h() {
    // Mats from the Hunting section
    const h_grey = document.getElementById("h_grey").value;
    const h_green = document.getElementById("h_green").value;
    //const h_green_2 = document.getElementById("h_green_2").value;
    const h_blue = document.getElementById("h_blue").value;
    const red_oreha_price = document.getElementById("red_oreha").value;

    // Price per 1 material
    const h_grey_1 = h_grey / 100;
    const h_green_1 = h_green / 10;
    //const h_green_2_1 = h_green_2 / 10;
    const h_blue_1 = h_blue / 10;

    // Price of one craft
    const oreha_one = (h_blue_1 * 52) + (h_green_1 * 51) + (h_grey_1 * 107) + oreha_raw_gold;
    const oreha_10 = oreha_one * 10;
    const oreha_20 = oreha_one * 20;
    const oreha_30 = oreha_one * 30;

    // Make 30/ 10 craft
    const oreha_10_profit = ((red_oreha_price * 30) * 0.95 - oreha_10);
    const oreha_20_profit = ((red_oreha_price * 60) * 0.95 - oreha_20);
    const oreha_30_profit = ((red_oreha_price * 90) * 0.95 - oreha_30);
    //console.log(red_oreha_price * 30, red_oreha_price * 60, red_oreha_price * 90);

    // Cost
    document.getElementById("oreha_10_cost_h").innerHTML = Math.round(oreha_10, 0);
    document.getElementById("oreha_20_cost_h").innerHTML = Math.round(oreha_20, 0);
    document.getElementById("oreha_30_cost_h").innerHTML = Math.round(oreha_30, 0);

    // Profit
    document.getElementById("oreha_10_profit_h").innerHTML = Math.round(oreha_10_profit, 0);
    document.getElementById("oreha_20_profit_h").innerHTML = Math.round(oreha_20_profit, 0);
    document.getElementById("oreha_30_profit_h").innerHTML = Math.round(oreha_30_profit, 0);
}

function orehaCalc_f() {
    // Mats from the Fishing section
    const f_grey = document.getElementById("f_grey").value;
    const f_green = document.getElementById("f_green").value;
    //const f_green_2 = document.getElementById("f_green_2").value;
    const f_blue = document.getElementById("f_blue").value;
    const red_oreha_price = document.getElementById("red_oreha").value;

    // Price per 1 material
    const f_grey_1 = f_grey / 100;
    const f_green_1 = f_green / 10;
    //const f_green_2_1 = f_green_2 / 10;
    const f_blue_1 = f_blue / 10;

    // Price of one craft
    const oreha_one = (f_blue_1 * 52) + (f_green_1 * 51) + (f_grey_1 * 107) + oreha_raw_gold;
    const oreha_10 = oreha_one * 10;
    const oreha_20 = oreha_one * 20;
    const oreha_30 = oreha_one * 30;

    // Make 30/ 10 craft
    const oreha_10_profit = ((red_oreha_price * 30) * 0.95 - oreha_10);
    const oreha_20_profit = ((red_oreha_price * 60) * 0.95 - oreha_20);
    const oreha_30_profit = ((red_oreha_price * 90) * 0.95 - oreha_30);
    //console.log(red_oreha_price * 30, red_oreha_price * 60, red_oreha_price * 90);

    // Cost
    document.getElementById("oreha_10_cost_f").innerHTML = Math.round(oreha_10, 0);
    document.getElementById("oreha_20_cost_f").innerHTML = Math.round(oreha_20, 0);
    document.getElementById("oreha_30_cost_f").innerHTML = Math.round(oreha_30, 0);

    // Profit
    document.getElementById("oreha_10_profit_f").innerHTML = Math.round(oreha_10_profit, 0);
    document.getElementById("oreha_20_profit_f").innerHTML = Math.round(oreha_20_profit, 0);
    document.getElementById("oreha_30_profit_f").innerHTML = Math.round(oreha_30_profit, 0);
}

function stimCalc() {
    //mats
    const mush_blue = document.getElementById("for_blue").value
    const mush_green = document.getElementById("for_green").value
    const log_blue = document.getElementById("l_blue").value
    const excav_green = document.getElementById("e_green").value
    const mush_grey = document.getElementById("for_grey").value
    const stim_price = document.getElementById("stim").value

    //price per 1
    const m_blue_1 = mush_blue / 10
    const m_green_1 = mush_green / 10
    const l_blue_1= log_blue / 10
    const e_green_1 = excav_green / 10
    const m_grey_1 = mush_grey / 100

    //price of craft
    const stim_one = (m_blue_1*5)+(m_green_1*20)+(l_blue_1*2)+(e_green_1*4)+(m_grey_1*40)+stim_raw_gold
    const stim_10 = stim_one*10
    const stim_20 = stim_one*20
    const stim_30 = stim_one*30

    //make 30/ 10craft
    const stim_10_profit = ((stim_price*30)*0.95-stim_10)
    const stim_20_profit = ((stim_price*60)*0.95-stim_20)
    const stim_30_profit = ((stim_price*90)*0.95-stim_30)

    //cost
    document.getElementById("stim_10_cost").innerHTML=Math.round(stim_10,0)
    document.getElementById("stim_20_cost").innerHTML=Math.round(stim_30,0)
    document.getElementById("stim_30_cost").innerHTML=Math.round(stim_30,0)

    //profit
    document.getElementById("stim_10_profit").innerHTML=Math.round(stim_10_profit,0)
    document.getElementById("stim_20_profit").innerHTML=Math.round(stim_30_profit,0)
    document.getElementById("stim_30_profit").innerHTML=Math.round(stim_30_profit,0)

}

function atroCalc() {
  // Mats for atrophine
  const for_blue_herb = document.getElementById("for_blue_herb").value;
  const m_blue = document.getElementById("m_blue").value;
  const for_green_herb = document.getElementById("for_green_herb").value;
  const e_green = document.getElementById("e_green").value;
  const for_grey_herb = document.getElementById("for_grey_herb").value;
  const atro_price = document.getElementById("atro").value;

  // Price per 1 material
  const for_blue_herb_1 = for_blue_herb / 10;
  const m_blue_1 = m_blue / 10;
  const for_green_herb_1 = for_green_herb / 10;
  const e_green_1 = e_green / 10;
  const for_grey_herb_1 = for_grey_herb / 100;

  // Price of one craft
  const atro_one = (for_blue_herb_1 * 103) + (m_blue_1 * 52) + (for_green_herb_1 * 51) + (e_green_1 * 51) + (for_grey_herb_1 * 107) + atro_raw_gold;
  const atro_10 = atro_one * 10;
  const atro_20 = atro_one * 20;
  const atro_30 = atro_one * 30;

  // Make 30/ 10 craft
  const atro_10_profit = ((atro_price * 30) * 0.95 - atro_10);
  const atro_20_profit = ((atro_price * 60) * 0.95 - atro_20);
  const atro_30_profit = ((atro_price * 90) * 0.95 - atro_30);
  console.log(atro_price * 30, atro_price * 60, atro_price * 90);

  // Cost
  document.getElementById("atro_10_cost").innerHTML = Math.round(atro_10, 0);
  document.getElementById("atro_20_cost").innerHTML = Math.round(atro_20, 0);
  document.getElementById("atro_30_cost").innerHTML = Math.round(atro_30, 0);

  // Profit
  document.getElementById("atro_10_profit").innerHTML = Math.round(atro_10_profit, 0);
  document.getElementById("atro_20_profit").innerHTML = Math.round(atro_20_profit, 0);
  document.getElementById("atro_30_profit").innerHTML = Math.round(atro_30_profit, 0);
}

function steakCalc() {
  // Mats for steak
  const h_blue = document.getElementById("h_blue").value;
  const f_blue = document.getElementById("f_blue").value;
  const h_green = document.getElementById("h_green").value;
  const h_green_2 = document.getElementById("h_green_2").value;
  const h_grey = document.getElementById("h_grey").value;
  const f_grey = document.getElementById("f_grey").value;
  const steak_price = document.getElementById("steak").value;

  // Price per 1 material
  const h_blue_1 = h_blue / 10;
  const f_blue_1 = f_blue / 10;
  const h_green_1 = h_green / 10;
  const h_green_2_1 = h_green_2 / 10;
  const h_grey_1 = h_grey / 100;
  const f_grey_1 = f_grey / 100;

  // Price of one craft
  const steak_one = (h_blue_1 * 12) + (f_blue_1 * 10) + (h_green_1 * 48) + (h_green_2_1 * 40) + (h_grey_1 * 96) + (f_grey_1 * 80);
  const steak_10 = steak_one * 10;
  const steak_20 = steak_one * 20;
  const steak_30 = steak_one * 30;

  // Make 30/ 10 craft
  const steak_10_profit = ((steak_price * 30) * 0.95 - steak_10);
  const steak_20_profit = ((steak_price * 60) * 0.95 - steak_20);
  const steak_30_profit = ((steak_price * 90) * 0.95 - steak_30);

  // Cost
  document.getElementById("steak_10_cost").innerHTML = Math.round(steak_10, 0);
  document.getElementById("steak_20_cost").innerHTML = Math.round(steak_20, 0);
  document.getElementById("steak_30_cost").innerHTML = Math.round(steak_30, 0);

  // Profit
  document.getElementById("steak_10_profit").innerHTML = Math.round(steak_10_profit, 0);
  document.getElementById("steak_20_profit").innerHTML = Math.round(steak_20_profit, 0);
  document.getElementById("steak_30_profit").innerHTML = Math.round(steak_30_profit, 0);
}

function inputUpdate() {
  // Update on input value change
atroCalc();
document.getElementById('for_blue_herb').addEventListener('input', atroCalc);
document.getElementById('m_blue').addEventListener('input', atroCalc);
document.getElementById('for_green_herb').addEventListener('input', atroCalc);
document.getElementById('e_green').addEventListener('input', atroCalc);
document.getElementById('for_grey_herb').addEventListener('input', atroCalc);
document.getElementById('atro').addEventListener('input', atroCalc);

orehaCalc()
document.getElementById('e_grey').addEventListener('input', orehaCalc);
document.getElementById('e_green').addEventListener('input', orehaCalc);
document.getElementById('e_blue').addEventListener('input', orehaCalc);
document.getElementById('red_oreha').addEventListener('input', orehaCalc);

orehaCalc_h();
document.getElementById('h_grey').addEventListener('input', orehaCalc_h);
document.getElementById('h_green').addEventListener('input', orehaCalc_h);
document.getElementById('h_blue').addEventListener('input', orehaCalc_h);
document.getElementById('red_oreha').addEventListener('input', orehaCalc_h);

orehaCalc_f();
document.getElementById('f_grey').addEventListener('input', orehaCalc_f);
document.getElementById('f_green').addEventListener('input', orehaCalc_f);
document.getElementById('f_green_2').addEventListener('input', orehaCalc_f);
document.getElementById('f_blue').addEventListener('input', orehaCalc_f);
document.getElementById('red_oreha').addEventListener('input', orehaCalc_f);

stimCalc()
document.getElementById('for_blue').addEventListener('input', stimCalc);
document.getElementById('for_green').addEventListener('input', stimCalc);
document.getElementById('l_blue').addEventListener('input', stimCalc);
document.getElementById('e_green').addEventListener('input', stimCalc);
document.getElementById('for_grey').addEventListener('input', stimCalc);
document.getElementById('stim').addEventListener('input', stimCalc);

steakCalc()
document.getElementById('h_blue').addEventListener('input', steakCalc);
document.getElementById('f_blue').addEventListener('input', steakCalc);
document.getElementById('h_green').addEventListener('input', steakCalc);
document.getElementById('h_green_2').addEventListener('input', steakCalc);
document.getElementById('h_grey').addEventListener('input', steakCalc);
document.getElementById('f_grey').addEventListener('input', steakCalc);
document.getElementById('steak').addEventListener('input', steakCalc);
  }

inputUpdate()

