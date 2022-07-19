import Perk from "../class/Perk.js";
import itemDatas from "./itemDatas.js";

const perks: Perk[] = [];
function addPerk(perk: Perk) {
  perks.push(perk);
}

addPerk(new Perk({
  name: "[color:#d58788]동반자[/color]",
  perkFlags: ["rare", "red"],
  itemData: itemDatas.andesite,
  description: "[color:#fcfc54]이 퍼크를 장착하고 승리하면, 효과가 추가됩니다.[/color]\n[color:#b3b3b3]현재 :[/color] [color:#5454fc]7[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#cafc00]약간 더 많은 추가 체력[/color]",
  itemData: itemDatas.cake,
  description: "[color:#fcfc54]추가 체력 3칸을 가집니다.[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#54fc54]유산[/color]",
  itemData: itemDatas.ender_chest,
  description: "[color:#fcfc54]레이드 종료 후, 가지고 있는 아이템을 3개까지 선택합니다.\n선택한 아이템들은 다음 섹션이 시작될 때 지급됩니다.[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#6e10c0]인벤토리가 두 배![/color]",
  itemData: itemDatas.purple_shulker_box,
  description: "[color:#fcfc54]셜커상자를 가지고 시작합니다.[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#0076fc]엄청 빠르게![/color]",
  itemData: itemDatas.blue_wool,
  description: "[color:#fcfc54]기본 이동 속도가 25% 증가합니다.[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#a8a8a8]공짜 돌 도끼[/color]",
  itemData: itemDatas.stone_axe,
  description: "[color:#fcfc54]돌 도끼를 가지고 시작합니다.[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#a8a8a8]공짜 돌 곡괭이[/color]",
  itemData: itemDatas.stone_pickaxe,
  description: "[color:#fcfc54]돌 곡괭이를 가지고 시작합니다.[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#945711]나무를 밀어줘![/color]",
  itemData: itemDatas.oak_log,
  description: "[color:#fcfc54]참나무 원목 48개를 가지고 시작합니다.[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#00fce2]이거나 드셔[/color]",
  itemData: itemDatas.oak_boat,
  description: "[color:#fcfc54]레이드 난이도가 증가하는 대신, 보상이 크게 증가합니다.[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#da00fc]귀환[/color]",
  itemData: itemDatas.ender_pearl,
  description: "[color:#fcfc54]단 한 번, 스폰으로 텔레포트할 수 있습니다.\n/trigger spawn 명령어를 사용해 워프하세요.[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#006efc]가치있는 경험[/color]",
  itemData: itemDatas.lapis_lazuli,
  description: "[color:#fcfc54]10레벨을 가지고 시작합니다.[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#fc760f]검도[/color]",
  itemData: itemDatas.wooden_sword,
  description: "[color:#fcfc54]공격 속도가 0.2 증가합니다.[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#ca72fc]슬리퍼[/color]",
  itemData: itemDatas.iron_boots,
  description: "[color:#fcfc54]슬리퍼를 가지고 시작합니다.[/color]\n[color:#a8a8a8]- 철 부츠\n- 보호 I, 가벼운 착지 I\n- 부서지지 않음[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#fcfc00]그치만 반짝이잖아![/color]",
  perkFlags: ["weaken"],
  itemData: itemDatas.spectral_arrow,
  description: "[color:#54fcfc]\"화살 삭제\" 효과는 분광 화살에 적용되지 않습니다.[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#129efc]점토 연성![/color]",
  itemData: itemDatas.clay_ball,
  description: "[color:#fcfc54]점토 블록은 50% 확률로 구리 원석을 드롭합니다.[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#8156b3]기회[/color]",
  perkFlags: ["rare"],
  useCount: 7,
  itemData: itemDatas.magenta_glazed_terracotta,
  description: "[color:#54fcfc]레이드 준비 시간에 퍼크를 장착할 수 있습니다.[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#926056]여백의 미[/color]",
  perkFlags: ["red"],
  itemData: itemDatas.glass,
  description: "[color:#fc5454]빈 퍼크 슬록 1개당[/color] [color:#54fc54]기본 공격력이 2 증가합니다. (최대 6)[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#d5aeff]네더 푸시[/color]",
  itemData: itemDatas.crying_obsidian,
  description: "[color:#fcfc54]양동이 2개를 가지고 시작합니다.\n스폰 주변에 용암 웅덩이가 생깁니다.[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#a9f7ff]고양이화[/color]",
  perkFlags: ["weaken"],
  itemData: itemDatas.string,
  description: "[color:#55ffff]배개는 가까운 보트에 답승합니다.[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#ff6017]EMC 컨버터[/color]",
  perkFlags: ["rare"],
  useCount: 5,
  itemData: itemDatas.ender_chest,
  description: "[color:#ffff58]나무 원목 64개를 사용해, 다이아몬드 1개를 얻을 수 있습니다.[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#c923c9]청크 오류[/color]",
  itemData: itemDatas.structure_block_data,
  description: "[color:#ffff58]스폰 근처 청크 1개가 기반암을 제외하고 전부 사라집니다.[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#00ff12]ecyc e[/color]",
  itemData: itemDatas.grass_block_side,
  description: "[color:#ffff58]레이드 종료 후 월드가 초기화되지 않습니다.\n새 스폰 지점은 이전 스폰 지점에서 1000블록 떨어져 있습니다.[/color]\n[color:#5656ff]이 퍼크는 레이드 3회당 1번만 장착 가능합니다.[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#2f68fe]과유불급[/color]",
  perkFlags: ["red"],
  itemData: itemDatas.diamond,
  description: "[color:#fc5454]다이아몬드 두구/갑옷의 조합 난이도가 쉬워집니다.[/color]\n[color:#54fc54]철, 금, 가죽 갑옷의 조합 난이도가 크게 상승합니다.[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#51f2f3]일심동체[/color]",
  perkFlags: ["red", "weaken"],
  itemData: itemDatas.chain,
  description: "[color:#4ce6e5]모든 플레이어는 레이드 중 죽지 않습니다.[/color]\n[color:#ff6260]베개가 (플레이어 수 x 기본 최대 체력)의 피해를 입히면 전멸합니다.[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#84b2ff]갑옷은 사치![/color]",
  itemData: itemDatas.diamond_helmet,
  description: "[color:#ffff5a]사용하지 않은 갑옷 슬롯 1칸마다 : [/color]\n[color:#b4b4b4]최대 체력 +3칸[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#81ff9d]내구성[/color]",
  itemData: itemDatas.netherite_scrap,
  description: "[color:#ffff5a]장착된 레어 퍼크는 40% 확률로 내구도가 소모되지 않습니다.[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#c3ff3b]보너스 찬스![/color]",
  itemData: itemDatas.arrow,
  description: "[color:#ffff5a]화살을 명중시키면 화살 한 발을 더 얻습니다.[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#ffffd8]피해량 베개화 공정[/color]",
  itemData: itemDatas.white_wool,
  description: "[color:#ffff5a]10 이상의 피해는 50%만 적용됩니다.[/color]\n[color:#aeafae]( 예시 : 18 --> 14 )[/color]",
  fromRaidNr: []
}));
addPerk(new Perk({
  name: "[color:#6066f6]심플 이즈 베스트[/color]",
  perkFlags: ["weaken"],
  itemData: itemDatas.oak_planks,
  description: "[color:#49dfde]베개의 방어 강도가 2 감소됩니다.[/color]",
  fromRaidNr: []
}));

Object.freeze(perks);
export default perks;
