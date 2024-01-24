export function classNamesFn(...classes: (string | undefined | false)[]): string {
    return classes.filter(Boolean).join(' ');
}