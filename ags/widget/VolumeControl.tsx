import { App, Astal, Gtk, Gdk } from "astal/gtk3"
import { Variable } from "astal"
import Wp from "gi://AstalWp"

function isSpeaker(): bool {
  return Wp.get_default().audio.default_speaker.description === "Speaker";
}
