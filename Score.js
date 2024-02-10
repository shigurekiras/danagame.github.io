export default class Score {

    score = 0
    HIGH_SCORE_KEY = 'highscore'

    constructor(ctx, scaleRatio) {
        this.ctx = ctx
        this.canvas = ctx.canvas
        this.scaleRatio = scaleRatio
    }

    update(frameTimeDelta) {
        this.score += frameTimeDelta * 0.01
    }

    reset () {
        this.score = 0
    }

    setHighscore() {
        const highscore = Number(localStorage.getItem(this.HIGH_SCORE_KEY))
        if(this.score > highscore) {
            localStorage.setItem(this.HIGH_SCORE_KEY,Math.floor(this.score))
        }
    }

    draw() {
        const highscore = Number(localStorage.getItem(this.HIGH_SCORE_KEY))
        const y = 20 * this.scaleRatio

        const fontSize = 20 * this.scaleRatio
        this.ctx.font = `${fontSize}px serif`
        this.ctx.fillStyle = "#000000"
        const scoreX = this.canvas.width - 75 * this.scaleRatio
        const highscoreX = scoreX - 125 * this.scaleRatio

        const scorePadded = Math.floor(this.score).toString().padStart(6,0)
        const highscorePadded = highscore.toString().padStart(6,0)

        this.ctx.fillText(scorePadded, scoreX, y)
        this.ctx.fillText(`HI ${highscorePadded}`,highscoreX,y)
    }
}