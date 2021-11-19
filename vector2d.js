class Vector2 {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.array = [x,y];
    }
    Multiply(v,apply = false) {
        if(typeof(v) == "number") {
            if(apply) {
                this.x = this.x*v;
                this.y = this.y*v;
            }
            return new Vector2(this.x*v,this.y*v);
        } else if(typeof(v) == "object") {
            if(apply) {
                this.x = this.x*v.x;
                this.y = this.y*v.y;
            }
            return new Vector2(this.x*v.x,this.y*v.y);
        }
    }
    Divide(v,apply = false) {
        if(typeof(v) == "number") {
            if(apply) {
                this.x = this.x/v;
                this.y = this.y/v;
            }
            return new Vector2(this.x/v,this.y/v);
        } else if(typeof(v) == "object") {
            if(apply) {
                this.x = this.x/v.x;
                this.y = this.y/v.y;
            }
            return new Vector2(this.x/v.x,this.y/v.y);
        }
    }
    Add(v,apply = false) {
        if(typeof(v) == "number") {
            if(apply) {
                this.x = this.x+v;
                this.y = this.y+v;
            }
            return new Vector2(this.x+v,this.y+v);
        } else if(typeof(v) == "object") {
            if(apply) {
                this.x = this.x+v.x;
                this.y = this.y+v.y;
            }
            return new Vector2(this.x+v.x,this.y+v.y);
        }
    }
    Subtract(v,apply = false) {
        if(typeof(v) == "number") {
            if(apply) {
                this.x = this.x-v;
                this.y = this.y-v;
            }
            return new Vector2(this.x-v,this.y-v);
        } else if(typeof(v) == "object") {
            if(apply) {
                this.x = this.x-v.x;
                this.y = this.y-v.y;
            }
            return new Vector2(this.x-v.x,this.y-v.y);
        }
    }
    Modulo(v,apply = false) {
        if(typeof(v) == "number") {
            if(apply) {
                this.x = this.x%v;
                this.y = this.y%v;
            }
            return new Vector2(this.x%v,this.y%v);
        } else if(typeof(v) == "object") {
            if(apply) {
                this.x = this.x%v.x;
                this.y = this.y%v.y;
            }
            return new Vector2(this.x%v.x,this.y%v.y);
        }
    }
    Pow(v,apply = false) {
        if(typeof(v) == "number") {
            if(apply) {
                this.x = this.x**v;
                this.y = this.y**v;
            }
            return new Vector2(this.x**v,this.y**v);
        } else if(typeof(v) == "object") {
            if(apply) {
                this.x = this.x**v.x;
                this.y = this.y**v.y;
            }
            return new Vector2(this.x**v.x,this.y**v.y);
        }
    }
    Floor(apply = false) {
        if(apply) {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
        }
        return new Vector2(Math.floor(this.x),Math.floor(this.y));
    }
    Ceil(apply = false) {
        if(apply) {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
        }
        return new Vector2(Math.ceil(this.x),Math.ceil(this.y));
    }
    Round(apply = false) {
        if(apply) {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
        }
        return new Vector2(Math.round(this.x),Math.round(this.y));
    }
    DistanceTo(vector) {
        return Math.sqrt(this.x-vector.x**2+this.y-vector.y**2);
    }
    MoveTowards(vector,step,apply = true) {
        const angle = Math.atan2(vector.x - this.x, vector.y - this.y);
        if(apply) {
            this.x += Math.sin(angle)*step;
            this.y += Math.cos(angle)*step;
        } else {
            return new Vector2(Math.sin(angle)*step,Math.cos(angle)*step);
        }
    }
}

export { Vector2 }