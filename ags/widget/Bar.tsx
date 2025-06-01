import { App, Astal, Gtk, Gdk } from "astal/gtk3"
import { Variable } from "astal"
import Wp from "gi://AstalWp"

const time = Variable("").poll(1000, "date")



export default function Bar(gdkmonitor: Gdk.Monitor) {
    const { TOP, LEFT, RIGHT } = Astal.WindowAnchor

    return <window
        className="Bar"
        gdkmonitor={gdkmonitor}
        exclusivity={Astal.Exclusivity.EXCLUSIVE}
        anchor={TOP | LEFT | RIGHT}
        application={App}>
        <centerbox>
            <button
                onClicked="echo hello"
                halign={Gtk.Align.CENTER}
            >
                Welcome to AGS!
            </button>
            <box />
            <button
                onClicked={() => {
                  const audio = Wp.get_default().audio;
                  print(audio.default_speaker.description)
                }}                
                halign={Gtk.Align.CENTER}
            >
                <label label={time()} />
            </button>
        </centerbox>
    </window>
}
