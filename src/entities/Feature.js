import AbstractEntity from './AbstractEntity'

class Feature extends AbstractEntity {
  constructor(data) {
    super(data);
    if(!data.title) {
      this.title = data.id[0].toUpperCase() + data.id.slice(1);
    }
  }
}

export default Feature
