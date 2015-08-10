'use strict';

let config = {
  stats: {
    enabled: false
  },
  autoattack: {
    disabled: true // Currently disabled, have to make sure my ally doesn't get attacked
  },
  nextRoom: {
    scoutMinControllerLevel: 4,
    ttlPerRoomForScout: 500,
    numberOfNextroomers: 5,
    maxRooms: 30,
    revive: true
  },

  power: {
    disabled: true,
    energyForCreeps: 800000,
    energyForSpawn: 250000
  },

  buildRoad: {
    maxConstructionSitesTotal: 80,
    maxConstructionSitesRoom: 3
  },
  constructionSite: {
    maxIdleTime: 5000
  },

  hostile: {
    remeberInRoom: 1500
  },

  path: {
    refresh: 20000
  },

  external: {
    distance: 4
  },

  sourcer: {
    spawnCarryLevelMultiplier: 300,
    spawnCarryWaitTime: 400
  },

  carry: {
    size: 200
  },

  creep: {
    renewOffset: 20,
    queueTtl: 100,
    structurer: true,
    reserverDefender: false,
    energyFromStorageThreshold: 2000
  },

  room: {
    revive: true,
    buildBlockersInterval: 1,
    basebuilderInterval: 10, // Replaced by room.memory.basebuilderInterval
    rebuildLayout: 7654,
    handleNukeAttackInterval: 132,
    reviveEnergyAvailable: 1000,
    reviveStorageAvailable: 3000,
    nextroomerInterval: 354,
    scoutInterval: 1032,
    scout: true, // TODO somehow broken ?? Is it broken ??
    builderMinStorage: 10000
  },

  layout: {
    plainCost: 5,
    swampCost: 5,
    borderAvoid: 20,
    wallAvoid: 10,
    pathAvoid: 1,
    structureAvoid: 0xFF,
    creepAvoid: 0xFF,
    checkInterval: 10, // Should be higher
    version: 16
  },

  mineral: {
    enabled: false,
    storage: 100000,
    minAmount: 5000,
    minAmountForMarket: 1000000
  }
};

module.exports = config;