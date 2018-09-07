export class SettingService {
    private altbackGround = false;

    setAltbackground(isAlt: boolean) {
        this.altbackGround = isAlt;
    }

    isAltbackground() {
        return this.altbackGround;
    }
}