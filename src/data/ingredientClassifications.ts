import { AvoidableIngredient } from '../constants';

export interface IngredientClassification {
  name: string;
  category: AvoidableIngredient;
  ingredients: string[];
}

export const INGREDIENT_CLASSIFICATIONS: IngredientClassification[] = [
  {
    name: 'Meat',
    category: 'meat',
    ingredients: [
      'chicken',
      'beef',
      'pork',
      'lamb',
      'turkey',
      'bacon',
      'sausage',
      'ham',
      'venison',
      'duck',
      'goose',
      'rabbit',
      'veal',
      'ground beef',
      'ground turkey',
      'ground chicken',
      'ground pork'
    ]
  },
  {
    name: 'Dairy',
    category: 'dairy',
    ingredients: [
      'milk',
      'cheese',
      'butter',
      'cream',
      'yogurt',
      'sour cream',
      'whey',
      'casein',
      'lactose',
      'ghee',
      'kefir',
      'buttermilk',
      'cottage cheese',
      'cream cheese',
      'ricotta',
      'parmesan',
      'mozzarella',
      'cheddar'
    ]
  },
  {
    name: 'Shellfish',
    category: 'shellfish',
    ingredients: [
      'shrimp',
      'crab',
      'lobster',
      'oysters',
      'clams',
      'mussels',
      'scallops',
      'crayfish',
      'prawns',
      'squid',
      'octopus'
    ]
  },
  {
    name: 'Gluten',
    category: 'gluten',
    ingredients: [
      'wheat',
      'barley',
      'rye',
      'spelt',
      'kamut',
      'semolina',
      'durum',
      'bulgur',
      'couscous',
      'farro',
      'einkorn',
      'emmer',
      'triticale',
      'malt',
      'brewer\'s yeast'
    ]
  },
  {
    name: 'Nuts',
    category: 'nuts',
    ingredients: [
      'almonds',
      'walnuts',
      'cashews',
      'pecans',
      'pistachios',
      'hazelnuts',
      'macadamia nuts',
      'brazil nuts',
      'pine nuts',
      'peanuts',
      'chestnuts',
      'nut butter',
      'almond flour',
      'almond milk',
      'cashew milk'
    ]
  },
  {
    name: 'Soy',
    category: 'soy',
    ingredients: [
      'soybeans',
      'soy sauce',
      'tofu',
      'tempeh',
      'edamame',
      'soy milk',
      'soy protein',
      'soy flour',
      'soy oil',
      'miso',
      'natto',
      'soy lecithin'
    ]
  },
  {
    name: 'Eggs',
    category: 'eggs',
    ingredients: [
      'eggs',
      'egg whites',
      'egg yolks',
      'egg powder',
      'albumin',
      'mayonnaise',
      'meringue'
    ]
  },
  {
    name: 'Fish',
    category: 'fish',
    ingredients: [
      'salmon',
      'tuna',
      'cod',
      'halibut',
      'tilapia',
      'mackerel',
      'sardines',
      'anchovies',
      'trout',
      'bass',
      'catfish',
      'swordfish',
      'snapper',
      'grouper',
      'flounder',
      'sole',
      'herring'
    ]
  },
  {
    name: 'Garlic',
    category: 'garlic',
    ingredients: [
      'garlic',
      'garlic powder',
      'garlic salt',
      'garlic oil',
      'garlic extract'
    ]
  },
  {
    name: 'Onion',
    category: 'onion',
    ingredients: [
      'onion',
      'onion powder',
      'onion salt',
      'onion flakes',
      'shallots',
      'leeks',
      'scallions',
      'chives',
      'ramps',
      'spring onions'
    ]
  }
]; 