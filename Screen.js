import {View, Button} from 'react-native';
import React from 'react';
import Realm from 'realm';

const TaskSchema = {
  name: 'Task',
  properties: {
    _id: 'int',
    name: 'string',
    status: 'string?',
  },
  primaryKey: '_id',
};

export default function AnimatedStyleUpdateExample(props) {
  const handleWrite = async () => {
    try {
      const realm = await Realm.open({
        path: 'myrealm',
        schema: [TaskSchema],
      });

      let task1, task2;
      realm.write(() => {
        task1 = realm.create('Task', {
          _id: 1,
          name: 'go grocery shopping',
          status: 'Open',
        });
        task2 = realm.create('Task', {
          _id: 2,
          name: 'go exercise',
          status: 'Open',
        });
        console.log(`created two tasks: ${task1.name} & ${task2.name}`);
      });
    } catch (e) {
      console.error('EEEE', e);
    }
  };

  return (
    <View>
      <Button title="write to realm" onPress={handleWrite} />
    </View>
  );
}
