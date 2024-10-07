# Data Dictionary

## User
| Field Name        | Data Type | REFERENCES    | Description                      |
|-------------------|-----------|---------------|----------------------------------|
| id                | NUMBER    |               | Primary Key                      |
| name              | VARCHAR   |               | Name of the player               |
| level             | NUMBER    |               | Player current experience level. |
| money             | NUMBER    |               | Player current money amount.     |
| health            | NUMBER    |               | Player current health amount.    |
| mana              | NUMBER    |               | Player current mana amount.      |
| energy            | NUMBER    |               | Player current energy amount.    |
| equipped_weapon_r | NUMBER    | => Weapon     | Right hand's equipped weapon.    |
| equipped_weapon_l | NUMBER    | => Weapon     | Left hand's equipped weapon.     |
| armor             | NUMBER    | => Armor      | Equipped armor set.              |
| prosthesis        | NUMBER    | => Prosthesis | Equipped prosthesis set.         |

## Weapon

| Field Name  | Data Type | REFERENCES    | Description                                                                                         |
|-------------|-----------|---------------|-----------------------------------------------------------------------------------------------------|
| id          | NUMBER    |               | Primary Key                                                                                         |
| name        | VARCHAR   |               | Name of the weapon                                                                                  |
| description | TEXT      |               | Description of the weapon. Example : "A wooden sniper rifle, battle hardened, long range scope..."  |
| ammunition  | NUMBER    | => Ammunition | Associated ammunitions.                                                                             |
| wield_type  | STRING    |               | "Dual Wield" or "Single Weapon". Dual wield weapons are equipped in both hands slots when selected. |

## Ammunition

| Field Name  | Data Type | REFERENCES  | Description                                                                  |
|-------------|-----------|-------------|------------------------------------------------------------------------------|
| id          | NUMBER    |             | Primary Key                                                                  |
| name        | VARCHAR   |             | Name of the amunition                                                        |
| description | TEXT      |             | Can give more informations. e.g: "Explosive bullets", "Fire Rockets", etc... |
| stock       | NUMBER    |             | Current amount of this amunition type.                                       |

## Ability

| Field Name   | Data Type | REFERENCES  | Description                                                                             |
|--------------|-----------|-------------|-----------------------------------------------------------------------------------------|
| id           | NUMBER    |             | Primary Key                                                                             |
| name         | VARCHAR   |             | Name of the ability                                                                     |
| description  | TEXT      |             | Gives information about the ability. How it strikes, how it is meant to be used, etc... |
| energy_price | NUMBER    |             | Amount of energy required in order to cast the ability.                                 |

## Upgrade

| Field Name  | Data Type | REFERENCES  | Description                                                                        |
|-------------|-----------|-------------|------------------------------------------------------------------------------------|
| id          | NUMBER    |             | Primary Key                                                                        |
| name        | VARCHAR   |             | Name of the upgrade. E.g: "Obsidian blade"                                         |
| description | TEXT      |             | Gives more roleplay context about how this upgrade was acquired and what it does.  |
| stats_bonus | JSON      |             | A JSON object containing all stats modifiers, e.g: {charisma: -1, intelligence: 1} |

## Armor

| Field Name     | Data Type | REFERENCES   | Description                                                                                      |
|----------------|-----------|--------------|--------------------------------------------------------------------------------------------------|
| id             | NUMBER    |              | Primary Key                                                                                      |
| helmet         | NUMBER    | => Equipment | Equipped helmet                                                                                  |
| torso          | NUMBER    | => Equipment | Equipped torso                                                                                   |
| legs           | NUMBER    | => Equipment | Equipped legs                                                                                    |
| foot_r         | NUMBER    | => Equipment | Equipped right foot armor piece                                                                  |
| foot_l         | NUMBER    | => Equipment | Equipped left foot armor piece                                                                   |
| is_power_armor | BOOLEAN   | => Equipment | If true: all armor pieces are pulled out. Armor now consume energy to boost abilities and stats. |
| energy         | NUMBER    | => Equipment | (only for power armors) Amount of energy.                                                        |

## Prosthesis

| Field Name | Data Type | REFERENCES   | Description                   |
|------------|-----------|--------------|-------------------------------|
| id         | NUMBER    |              | Primary Key                   |
| helmet     | NUMBER    | => Equipment | Equipped helmet posthesis     |
| torso      | NUMBER    | => Equipment | Equipped torso posthesis      |
| legs       | NUMBER    | => Equipment | Equipped legs posthesis       |
| foot_r     | NUMBER    | => Equipment | Equipped right foot posthesis |
| foot_l     | NUMBER    | => Equipment | Equipped left foot posthesis  |

## Equipment

| Field Name  | Data Type | REFERENCES   | Description                          |
|-------------|-----------|--------------|--------------------------------------|
| id          | NUMBER    |              | Primary Key                          |
| name        | NUMBER    | => Equipment | Name of the equipment.               |
| description | NUMBER    | => Equipment | Describe the equipment.              |
| type        | NUMBER    | => Equipment | "Helmet", "Torso", "Legs", or "Feet" |
| upgrades    | NUMBER    | => Upgrade   | Equipement upgrades                  |